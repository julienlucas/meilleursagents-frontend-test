import React, { useEffect, ChangeEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SSwitchRealtors } from './style';
import { Store } from '../../../domain/entities/store.interface';
import { getRealtorsUC } from '../../../domain/usecases/realtors.usecase'
import { setDefaultSelectedMessageUC } from '../../../domain/usecases/messages.usecase'
import { useStore, setSelectedRealtorId } from '../../../store';

const SwitchRealtors: React.FC = () => {
  const [state, dispatch] = useStore<Store>({});
  const navigate = useNavigate();
  const { realtorId } = useParams();

  useEffect(() => {
    if (realtorId) {
      getRealtorsUC(realtorId, dispatch);
    }
  }, [realtorId]);

  useEffect(() => {
    if (realtorId && (realtorId !== state.selectedRealtorId)) {
      dispatch(setSelectedRealtorId(realtorId));
      localStorage.setItem('selectedRealtorId', realtorId.toString());
    }
  }, [realtorId]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    navigate(`/realtors/${value}`);
    setDefaultSelectedMessageUC(value, dispatch);
  };

  return (
    <SSwitchRealtors onChange={handleChange} value={state.selectedRealtorId}>
      {state.realtors?.map(realtor =>
        <option key={realtor.id} value={realtor.id}>{realtor.name}</option>
      )}
    </SSwitchRealtors>
  )
};

export default SwitchRealtors;
