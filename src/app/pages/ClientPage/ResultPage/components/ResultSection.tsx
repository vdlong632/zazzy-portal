import { Stack, styled, Typography } from "@mui/material"
import { MOCK_RESULT } from "types/rebate"

export const ResultSection = () => {
    return (
        <Stack display={'flex'} flexDirection={'column'} gap={'11px'}>
            {MOCK_RESULT.map((item) => (
                <CardStyled >
                    <BadgeStyled>{item.badge}</BadgeStyled>
                    <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                        <Typography>{item.heading}</Typography>
                        <Typography>{item.budget}</Typography>
                    </Stack>
                    <Typography>{item.rebate}</Typography>
                </CardStyled>
            )
            )}
        </Stack>
    )
}

const CardStyled = styled(Stack)(() => ({
    padding: '20px 22px',
    borderRadius: '26px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FDFCF8'
}))

const BadgeStyled = styled(Typography)(() => ({
    fontSize: '',
    color: '',
    backgroundColor: '',
    width: 'fit-content'
}))
