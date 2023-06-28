import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from './Header';
import ChatPage from './ChatPage';
import StatusPage from './StatusPage';
import CallsPage from './CallsPage';
import GroupsPage from './GroupsPage';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('chats');

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
        <Header />
        <View style={{ flexDirection: 'row', backgroundColor: '#0078D4', position: 'static' }}>
            <TouchableOpacity
                style={{
                maxWidth: 50,
                flex: 1,
                alignItems: 'center',
                paddingVertical: 12,
                borderBottomWidth: activeTab === 'groups' ? 4 : 0,
                borderBottomColor: activeTab === 'groups' ? '#FFFFFF' : '#FFFFFF',
                }}
                onPress={() => handleTabPress('groups')}
            >

            <Icon name="users" style={{ color: "#FFFFFF", fontSize: 18, fontWeight: activeTab === 'groups' ? 'bold': 'thin',}}/>
        </TouchableOpacity>
        
        <TouchableOpacity
            style={{
            flex: 1,
            alignItems: 'center',
            paddingVertical: 12,
            borderBottomWidth: activeTab === 'chats' ? 4 : 0,
            borderBottomColor: activeTab === 'chats' ? '#FFFFFF' : '#FFFFFF',
            }}
            onPress={() => handleTabPress('chats')}
        >
            <Text style={{ color: "#FFFFFF", fontWeight: activeTab === 'chats' ? 'bold': 'thin'}}>Chats</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={{
            flex: 1,
            alignItems: 'center',
            paddingVertical: 12,
            borderBottomWidth: activeTab === 'status' ? 4 : 0,
            borderBottomColor: activeTab === 'status' ? '#FFFFFF' : '#FFFFFF',
            }}
            onPress={() => handleTabPress('status')}
        >
            <Text style={{ color: "#FFFFFF", fontWeight: activeTab === 'status' ? 'bold': 'thin',
 }}>Status</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={{
            flex: 1,
            alignItems: 'center',
            paddingVertical: 12,
            borderBottomWidth: activeTab === 'calls' ? 4 : 0,
            borderBottomColor: activeTab === 'calls' ? '#FFFFFF' : '#FFFFFF',
            }}
            onPress={() => handleTabPress('calls')}
        >
            <Text style={{ color: "#FFFFFF", fontWeight: activeTab === 'calls' ? 'bold': 'thin' }}>Calls</Text>
        </TouchableOpacity>
    </View>
    <ScrollView>
        <View style={{backgroundColor: 'white', paddingBottom: 10}}>
            {activeTab === 'chats' ? <ChatPage /> : ""}
            {activeTab === 'status' ? <StatusPage /> : ""}
            {activeTab === 'calls' ? <CallsPage /> : ""}
            {activeTab === 'groups' ? <GroupsPage /> : ""}
            
        </View>
        
    </ScrollView>
    {activeTab === 'chats' && 
        <View style={{position: 'absolute', top: 680, right: 20}}>
            <TouchableOpacity style={{borderRadius: 100, backgroundColor: '#0078D4', color: 'white', width: 60, height: 60, justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                    <Text>
                        <Icon name="comment" style={{color: 'white', fontSize: 18}}/>
                    </Text>
            </TouchableOpacity> 
        </View>
    }

    {activeTab === 'status' && 
        <View style={{position: 'absolute', top: 600, right: 20, textAlign: 'right', justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={{borderRadius: 100, backgroundColor: 'lightgray', color: 'white', width: 45, height: 45, justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                    <Text style={{fontWeight: 'bold', color: '#444444', shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 23,
    },shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 3,
    },}}>
                        <Icon name="pencil" style={{ fontSize: 18}}/>
                    </Text>
            </TouchableOpacity> 
            <TouchableOpacity style={{borderRadius: 100, backgroundColor: '#0078D4', color: 'white', width: 60, height: 60, justifyContent: 'center', alignItems: 'center', position: 'relative', marginTop: 20}}>
                    <Text>
                        <Icon name="camera" style={{color: 'white', fontSize: 18}}/>
                    </Text>
            </TouchableOpacity> 
        </View>
    }

    {activeTab === 'calls' && 
        <View style={{position: 'absolute', top: 680, right: 20}}>
            <TouchableOpacity style={{borderRadius: 100, backgroundColor: '#0078D4', color: 'white', width: 60, height: 60, justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                    <Text>
                        <Icon name="phone" style={{color: 'white', fontSize: 18}}/>
                    </Text>
            </TouchableOpacity> 
        </View>
    }
    
    </>
  );
};

export default Navbar;
