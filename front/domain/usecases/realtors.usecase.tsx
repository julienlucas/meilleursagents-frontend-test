import RealtorsGateway from '../../infrastructure/RealtorsGateway';
import { Realtor } from '../entities/realtor.interface';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getRealtorsUC = createAsyncThunk(
  'realtors/fetchRealtors',
  async (realtorId: string) => {
    const realtorsGateway = RealtorsGateway.getInstance();

    try {
      const realtors = await realtorsGateway.getRealtors();
      const unreadCount = realtors.filter(
        (realtor: Realtor) => realtor.id === Number(realtorId),
      )[0].unread_messages;

      return { realtors, unreadCount };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
);

export const setSelectedRealtorUC = createAsyncThunk(
  'realtors/setSelectedRealtor',
  async (realtorId: string) => {
    localStorage.setItem('selectedRealtorId', realtorId.toString());
    return realtorId;
  },
);
