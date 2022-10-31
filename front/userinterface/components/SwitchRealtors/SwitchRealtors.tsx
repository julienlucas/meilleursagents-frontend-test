import React, { useEffect, ChangeEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { SSwitchRealtors } from './style';
import {
  getRealtorsUC,
  setSelectedRealtorUC,
} from '../../../domain/usecases/realtors.usecase';
import { setDefaultSelectedMessageUC } from '../../../domain/usecases/messages.usecase';
import { resetPage } from '../../../store/reducers';
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
    dispatch(resetPage());
    navigate(`/realtors/${value}`);
    dispatch(setDefaultSelectedMessageUC(value));
  };

  return (
    <SSwitchRealtors
      onChange={handleChange}
      value={state.selectedRealtorId}
      data-testid="select-switch-realtors"
    >
      {state.realtors?.map((realtor) => (
        <option
          key={uuidv4()}
          value={realtor.id}
          data-testid={`option-switch-realtor-${realtor.id}`}
        >
          {realtor.name}
        </option>
      ))}
    </SSwitchRealtors>
  );
};

export default SwitchRealtors;
