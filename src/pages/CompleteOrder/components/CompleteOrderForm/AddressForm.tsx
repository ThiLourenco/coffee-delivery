import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../components/Input'
import { db } from '../../../../services/api'
import { AddressFormContainer } from './styles'

interface ErrosType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

interface IFormProps {
  completeOrder: any;
}

export const AddressForm = ({ completeOrder }: IFormProps) => {
  
  const { register, handleSubmit, formState, watch } = useFormContext()
  const [cepInfo, setCepInfo ] = useState({ 
    estate: '', 
    city: '', 
    street: '', 
    district: '', 
  });

  const { estate, city, street, district } = cepInfo;

  const cep = watch('cep');
  const isCepValid = /^[0-9]{5}-[0-9]{3}$/.test(cep);

  const { errors } = formState as unknown as ErrosType
  
  useEffect(() => {
    const getCepInfo = async () => {
      if (isCepValid) {
        const resp = await db.get(`/${cep}/json`);
        const newCepInfo = { estate: resp.data.uf, city: resp.data.localidade, district: resp.data.bairro, street: resp.data.logradouro };
        setCepInfo(newCepInfo);
      } else {
        setCepInfo({ estate: '', city: '', street: '', district: '' });
      }
    };

    getCepInfo();
  }, [watch('cep')]);

  const handleCompleteOrder = (data: any) => {
    const orderData = { ...data, ...cepInfo};
    completeOrder(orderData)
  }

  return (  
    <AddressFormContainer
      onSubmit={handleSubmit(handleCompleteOrder)}
      className="container"
    >
      
      <Input
        placeholder="CEP"
        type="string"
        className="cep"
        {...register('cep')}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        className="street"
        type="string"
        {...register('street')}
        error={errors.street?.message}
        defaultValue={street}
        
      />
      <Input
        placeholder="Número"
        type="number"
        {...register('number')}
        error={errors.number?.message}
      />
      <Input
        placeholder="Complemento"
        className="complement"
        {...register('complement')}
        error={errors.complement?.message}
        rightText="Opcional"
      />
      <Input
        placeholder="Bairro"
        type="string"
        defaultValue={district}
        {...register('district')}
        error={errors.district?.message}
        
      />
      <Input
        placeholder="Cidade"
        type="string"
        {...register('city')}
        error={errors.city?.message}
        defaultValue={city}
        
      />
      <Input
        placeholder="UF"
        {...register('uf')}
        type="string"
        error={errors.uf?.message}
        defaultValue={estate}
        
      />
    </AddressFormContainer>
  )
}
