
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
    const history = useHistory();
    return (
        <Drawer variant="permanent">
            <List>
                <ListItem button onClick={() => history.push("/ai-coach")}>
                    <ListItemIcon>{/* Icon */}</ListItemIcon>
                    <ListItemText primary="AI Agile Coach" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
