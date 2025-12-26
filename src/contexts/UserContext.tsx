'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
  lastLogin: string;
  trashed: boolean;
}

interface UserContextType {
  users: User[];
  addUser: (user: Omit<User, 'id' | 'lastLogin' | 'trashed'>) => void;
  editUser: (id: number, updatedUser: Partial<User>) => void;
  deleteUser: (id: number) => void;
  restoreUser: (id: number) => void;
  permanentDeleteUser: (id: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>(() => {
    try {
      const storedUsers = sessionStorage.getItem('usersData');
      if (storedUsers) {
        const parsed = JSON.parse(storedUsers);
        return Array.isArray(parsed) ? parsed : [];
      }
      return [
       { id: 1, name: 'Sofia Martinez', email: 'sofia.martinez@example.ca', role: 'Admin', status: 'Active', lastLogin: '2025-08-05 14:30', trashed: false },
        { id: 2, name: 'Liam Chen', email: 'liam.chen.work@example.ca', role: 'User', status: 'Active', lastLogin: '2025-08-04 09:15', trashed: false },
        { id: 3, name: 'Aisha Khan', email: 'aisha.khan@example.ca', role: 'Editor', status: 'Inactive', lastLogin: '2025-07-30 16:45', trashed: false },
        { id: 4, name: 'Mateo Rodriguez', email: 'mateo.rdz@example.ca', role: 'User', status: 'Active', lastLogin: '2025-08-06 08:00', trashed: false },
        { id: 5, name: 'Priya Sharma', email: 'priya.sharma@example.ca', role: 'Admin', status: 'Inactive', lastLogin: '2025-07-28 12:20', trashed: false },
        { id: 6, name: 'Noah Kim', email: 'noah.kim@example.ca', role: 'User', status: 'Active', lastLogin: '2025-08-06 10:10', trashed: false },
        { id: 7, name: 'Fatima Al-Sayed', email: 'fatima.alsayed@example.ca', role: 'Editor', status: 'Active', lastLogin: '2025-08-05 17:50', trashed: false },
      ];
    } catch (e) {
      console.error('Error parsing usersData from sessionStorage:', e);
      return [];
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem('usersData', JSON.stringify(users));
    } catch (e) {
      console.error('Error saving usersData to sessionStorage:', e);
    }
  }, [users]);

  const addUser = (user: Omit<User, 'id' | 'lastLogin' | 'trashed'>) => {
    const newId = Math.max(...users.map((u) => u.id), 0) + 1;
    const newUser: User = {
      ...user,
      id: newId,
      lastLogin: new Date().toISOString().slice(0, 16).replace('T', ' '),
      trashed: false,
    };
    setUsers([...users, newUser]);
  };

  const editUser = (id: number, updatedUser: Partial<User>) => {
    setUsers(users.map((user) => (user.id === id ? { ...user, ...updatedUser } : user)));
  };

  const deleteUser = (id: number) => {
    setUsers(users.map((user) => (user.id === id ? { ...user, trashed: true } : user)));
  };

  const restoreUser = (id: number) => {
    setUsers(users.map((user) => (user.id === id ? { ...user, trashed: false } : user)));
  };

  const permanentDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <UserContext.Provider value={{ users, addUser, editUser, deleteUser, restoreUser, permanentDeleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
};