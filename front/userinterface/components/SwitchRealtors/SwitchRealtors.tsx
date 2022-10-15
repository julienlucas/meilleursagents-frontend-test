import React, { useEffect, ChangeEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SSwitchRealtors } from './style';
import {
  getRealtorsUC,
  setSelectedRealtorUC,
} from '../../../domain/usecases/realtors.usecase';
import { setDefaultSelectedMessageUC } from '../../../domain/usecases/messages.usecase';
import { setPage } from '../../../store/reducers';
import { useAppDispatch, useTypedSelector } from '../../../store/store';

const SwitchRealtors: React.FC = () => {
  const dispatch = useAppDispatch();
  const state = useTypedSelector((state) => state);
  const navigate = useNavigate();
  const { realtorId } = useParams();

  useEffect(() => {
    if (realtorId) {
      dispatch(getRealtorsUC(realtorId));
    }
  }, [realtorId]);

  useEffect(() => {
    if (realtorId && realtorId !== state.selectedRealtorId) {
      dispatch(setSelectedRealtorUC(realtorId));
    }
  }, [realtorId]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    navigate(`/realtors/${value}`);
    dispatch(setPage());
    dispatch(setDefaultSelectedMessageUC(value));
  };

  return (
    <SSwitchRealtors onChange={handleChange} value={state.selectedRealtorId}>
      {state.realtors?.map((realtor) => (
        <option key={realtor.id} value={realtor.id}>
          {realtor.name}
        </option>
      ))}
    </SSwitchRealtors>
  );
};

export default SwitchRealtors;
