import { Stack, styled } from "@mui/material"
import { AireSystem } from "./components/AireSystem"
import { VendorStatus } from "./components/VendorStatus"
import { ActiveLeads } from "./components/ActiveLeads"


export const DashboardPage = () => {
    return (
        <WrapSection>
            <AireSystem/>
            <VendorStatus/>
            {/* <ActiveLeads/> */}
        </WrapSection>
    )
}

const WrapSection = styled(Stack)(() => ({
    minHeight: '100vh',
    // paddingTop: '62px',
    backgroundColor: '#EEEEE9'
}))