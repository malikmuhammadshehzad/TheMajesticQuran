import {
  FlatList,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './style';
import { MYButton, MyInput, PlusButton, SearchInput } from '../../components';
import { COLORS, ICONS } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";
const Notes = () => {
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const [filteredData, setFilteredData] = useState(todoList);
  const [todoList, setTodoList] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [discription, setDiscription] = useState('');
  const navigation = useNavigation();
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setTitle('')
    setDiscription('')
  };
  const EdittoggleModal = () => {
    setEditModalVisible(!editModalVisible);
  };

  const handleAdd = () => {
    setTodoList([...todoList, { title: title, discription: discription }]);
    toggleModal();
  };
  const handleEdit = (item, index) => {
    setEditTodo(index);
    setTitle(item.title);
    setDiscription(item.discription)
  };

  const handleDelete = () => {
    if (editTodo !== null) {
      const tempArray = [...todoList];
      tempArray.splice(editTodo, 1);
      setTodoList(tempArray);
      EdittoggleModal();
    }
  }
  const handleUpdateTodo = () => {
    const updateTodo = todoList.map((item, index) => {

      if (index === editTodo) {
        return { ...item, title: title, discription: discription };
      }
      return item;
    });
    console.log('updateTodo', updateTodo);
    EdittoggleModal()
    setTodoList(updateTodo);
    setEditTodo(null);
    setTitle('');
    setDiscription('');
  };
  useEffect(() => {
    if (search && todoList) {
      const filterData = todoList.filter(item => {
        const value = item.title.toLowerCase();
        return value.includes(search.toLowerCase())
      })
      setSearch(filterData)
    } else {
      setFilteredData(todoList);  
    }
  }, [search, todoList])
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.headingContainer}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <ICONS.BackIcon />
          </Pressable>
          <View style={styles.titleContainer}>
            <Text style={styles.heading}>Notes</Text>
          </View>
        </View>
        <SearchInput
          value={search}
          placeholder={'Search...'}
          onChangeText={text => setSearch(text)}
        />
        <FlatList
          data={filteredData}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Pressable onPress={() => { EdittoggleModal(); handleEdit(item, index) }} style={styles.mainList}>
              <View style={styles.listText}>
                <Text style={styles.title}>{item.title}</Text>
                <Text numberOfLines={1} style={styles.text}>{item.discription}</Text>
                <Text style={styles.text}>create at 29/11/2023</Text>
              </View>
              <TouchableOpacity>
                <ICONS.ShareIcon color={COLORS.navyBlue} />
              </TouchableOpacity>
            </Pressable>
          )}
        />
        <TouchableOpacity onPress={toggleModal} style={styles.plusContainer}>
          <ICONS.PlusIcon size={70} bgColor={COLORS.yellow} />
        </TouchableOpacity>
      </View>

      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 12, padding: 12 }}>
          <View style={styles.iconContainer} >
            <Pressable style={{ width: '15%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
              onPress={toggleModal}>
              <ICONS.BackIcon color={COLORS.black} />
            </Pressable>
            {
              title && discription ? <Pressable style={{ width: '15%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
                onPress={handleAdd}>
                <ICONS.CheckIcon color={COLORS.black} />
              </Pressable> : (
                <Pressable style={{ width: '15%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
                >

                </Pressable>
              )
            }
          </View>
          <TextInput style={{ fontSize: 22, fontWeight: '700', borderBottomWidth: 1, }} value={title} onChangeText={text => setTitle(text)} placeholder='Title' />
          <TextInput style={{ fontSize: 22, fontWeight: '400' }} value={discription} onChangeText={text => setDiscription(text)} placeholder='Discription' />
        </View>
      </Modal>
      {/* Edit Modal  */}
      <Modal isVisible={editModalVisible}>
        <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 12, padding: 12 }}>
          <View style={styles.iconContainer} >
            <Pressable style={{ width: '15%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
              onPress={EdittoggleModal}>
              <ICONS.BackIcon color={COLORS.black} />
            </Pressable>
            {
              title && discription ? <Pressable style={{ width: '15%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
                onPress={handleUpdateTodo}>
                <ICONS.CheckIcon color={COLORS.black} />
              </Pressable> : (
                <Pressable style={{ width: '15%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
                >
                </Pressable>
              )
            }
          </View>
          <TextInput
            style={{ fontSize: 22, fontWeight: '700', borderBottomWidth: 1, }}
            value={title}
            onChangeText={text => setTitle(text)}
            placeholder='Title' />
          <TextInput
            style={{ fontSize: 22, fontWeight: '400' }}
            value={discription}
            onChangeText={text => setDiscription(text)}
            placeholder='Discription' />
        </View>
        <TouchableOpacity onPress={handleDelete} style={styles.cancleContainer}>
          <ICONS.CancleIcon />
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default Notes;
