import { memo } from 'react';
import { Grid, Stack, styled } from '@mui/material';
import { OTPION_UPGRADES_INTEREST } from '../const';
import { useFormContext } from 'react-hook-form';
import { TypeMultiForm } from '../type';

export const Step5 = memo(() => {
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
          {OTPION_UPGRADES_INTEREST.map((item) => {
            const active = watch('step5.upgrades') || [];
            const isSelected = active.includes(item.id);
            return (
              <Grid item xs={12} sm={12}>
                <ItemSwap
                  sx={{
                    background: isSelected ? '#EAF3DE' : '#FDFCF8',
                    border: isSelected ? '2px solid #0A2E1F' : '',
                    cursor: 'pointer',
                    '&:hover': {
                      borderColor: '#7B96AD',
                      backgroundColor: '#EAF3DE'
                    }
                  }}
                  onClick={() => {
                    if (isSelected) {
                      setValue(
                        'step5.upgrades',
                        active.filter((id) => id !== item.id)
                      );
                    } else {
                      setValue('step5.upgrades', [...active, item.id]);
                    }
                    setError('step5.upgrades', {
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
  textAlign: 'left',
  '&:hover': {
    borderColor: '#7B96AD',
    backgroundColor: '#EAF3DE'
  }
}));
