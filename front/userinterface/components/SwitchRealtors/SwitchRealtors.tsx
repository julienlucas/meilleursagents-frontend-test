import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SSwitchRealtors } from './style';
import { Store } from '../../../domain/entities/store.interface';
import { getRealtors } from '../../../domain/usecases/realtors.usecase'
import { useStore } from '../../../store';

const SwitchRealtors = (props) => {
  const [state, dispatch] = useStore<Store>({});
  const { id } = useParams();

  useEffect(() => {
    getRealtors(dispatch)
  }, []);

  useEffect(() => {
    if (id) {
      console.log(id)
    }
  }, [id])

  return (
    <SSwitchRealtors>
      {state.realtors?.map(realtor =>
        <option key={realtor.id}>{realtor.name}</option>
      )}
    </SSwitchRealtors>
  )
};

export default SwitchRealtors;
