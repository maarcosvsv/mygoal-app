import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
const PagesHeader: React.FC = (props: any) => {
    return (
        <Card className="mb-2">
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        {props.icon}
                    </Avatar>
                }
                title={props.title}
                subheader={props.subHeader}
            />
        </Card>
    )
}
export default PagesHeader