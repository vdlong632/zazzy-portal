import { memo } from 'react';
import { Grid, Stack, styled, Typography } from '@mui/material';
import { OPTION_BUILDING_SIZE } from '../const';
import { useFormContext } from 'react-hook-form';
import { TypeMultiForm } from '../type';

export const Step6 = memo(() => {
  const {
    control,
    watch,
    setValue,
    setError,
    formState: { errors }
  } = useFormContext<TypeMultiForm>();
  return (
    <Stack flex={1} alignItems={'center'}>
      <Stack>
        <Grid container spacing={'10px'}>
          {OPTION_BUILDING_SIZE.map((item) => {
            const active = watch('step6.buildingSize') === item.id;
            return (
              <Grid item xs={12} sm={6}>
                <ItemSwap
                  sx={{
                    background: active ? '#EAF3DE' : '#FDFCF8',
                    border: active ? '2px solid #0A2E1F' : '',
                    cursor: 'pointer',
                    '&:hover': {
                      borderColor: '#7B96AD',
                      backgroundColor: '#EAF3DE'
                    }
                  }}
                  onClick={() => {
                    if (active) {
                      return;
                    }
                    setValue('step6.buildingSize', item.id);
                    setError('step6.buildingSize', {
                      type: 'required',
                      message: ''
                    });
                  }}>
                  <Stack sx={{ fontSize: '22px', flexShrink: 0 }}>{item.icon}</Stack>
                  <Stack>
                    <Stack sx={{ fontSize: '14px', fontWeight: 600, color: '#0C0F0D' }}>
                      {item.title}
                    </Stack>
                  </Stack>
                </ItemSwap>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Stack>
  );
});

const ItemSwap = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
  padding: '14px 16px',
  backgroundColor: '#FDFCF8',
  border: '2px solid #E5DFC8',
  borderRadius: '18px',
  cursor: 'pointer',
  transition: 'all .18s',
  textAlign: 'left',
  '&:hover': {
    borderColor: '#7B96AD',
    backgroundColor: '#EAF3DE'
  }
}));
