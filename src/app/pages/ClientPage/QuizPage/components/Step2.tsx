import { memo } from 'react';
import { Grid, Stack, styled } from '@mui/material';
import { OPTION_BUILDING_CONTRUCTED } from '../const';
import { useFormContext } from 'react-hook-form';
import { TypeMultiForm } from '../type';

export const Step2 = memo(() => {
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
          {OPTION_BUILDING_CONTRUCTED.map((item) => {
            const active = watch('step2.timeContructed') === item.id;
            return (
              <Grid item xs={6}>
                <ItemSwap
                  sx={{
                    background: active ? '#EAF3DE' : 'transparent',
                    border: active ? '2px solid #0A2E1F' : '',
                    cursor: 'pointer',
                    '&:hover': {
                      borderColor: '#7B96AD'
                    }
                  }}
                  onClick={() => {
                    if (active) {
                      return;
                    }
                    setValue('step2.timeContructed', item.id);
                    setError('step2.timeContructed', {
                      type: 'required',
                      message: ''
                    });
                  }}>
                  <Stack sx={{ fontSize: '22px', flexShrink: 0 }}>{item.icon}</Stack>
                  <Stack>
                    <Stack sx={{ fontSize: '14px', fontWeight: 600, color: '#0C0F0D' }}>
                      {item.title}
                    </Stack>
                    <Stack sx={{ fontSize: '12px', color: '#4A5248', marginTop: '1px' }}>
                      {item.desc}
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
  textAlign: 'left'
}));
