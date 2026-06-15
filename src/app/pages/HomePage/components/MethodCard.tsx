// import { Box, Stack, styled, SxProps, Theme, Typography } from "@mui/material"

// type MethodCardProps = {
//     icon: string,
//     step: number,
//     title: string
//     text: string,
//     sx?: SxProps<Theme>;
// }
// export const MethodCard = ({icon, step, title, text, sx} : MethodCardProps) => {
//     return (
//         <CardSwapper sx={{...sx}}>
//             <StepStyled>{step}</StepStyled>
//             <IconStyled>{icon}</IconStyled>
//             <Typography sx={{fontSize: '19px', fontWeight: 700, color: '#0a2e1f', marginBottom: '9px'}}>{title}</Typography>
//             <Typography sx={{fontSize: '14px', lineHeight: 1.65, color: '#4a5248'}}>{text}</Typography>
//         </CardSwapper>
//     )
// }

// const CardSwapper = styled(Stack)(() => ({
//     padding: '30px',
//     borderRadius: '10px',
// }))

// const IconStyled = styled(Box)(() => ({
//     width: '46px',
//     height: '46px',
//     borderRadius: '12px',
//     fontSize: '22px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: '18px'
// }))

// const StepStyled = styled(Typography)(() => ({
//     position: 'absolute',
//     top: '18px',
//     right: '18px',
//     fontFamily: 'Syne, sans-serif',
//     fontSize: '68px',
//     fontWeight: 800,
//     lineHeight: 1
// }))
