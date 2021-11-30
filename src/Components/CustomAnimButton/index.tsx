import { Box, Button } from '@mui/material';
import React   from 'react';
// import SailingRoundedIcon from '@mui/icons-material/SailingRounded';
import './styles.scss'
import Ship from "../../assests/images/shipIcon.png";

interface CustomAnimButtonProps {
    children?: any
    dark?: boolean
}

const CustomAnimButton:React.FC<CustomAnimButtonProps> = (props:CustomAnimButtonProps) => {
    // const [isHover, setHover] = useState(false);
    return <Button 
                className="anim_btn pe-5 py-3 px-5" 
                sx={{ border: '1px solid #16B4FF'}}
                variant="outlined" 
                endIcon={
                    <Box className="d-flex flex-row align-items-center px-2 ms-1" style={{position:'relative'}}><img width="35" src={Ship} className="hover_on" /></Box>
                }
            >
        <Box color={props.dark? "#021124":"white"}><b style={{letterSpacing: 2, fontSize: 16, textTransform: 'none' }}>{props.children}</b></Box>
    </Button>
}

export default CustomAnimButton;
