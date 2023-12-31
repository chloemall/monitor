import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const SideMenu = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      key: "analytics",
      label: 'analytics'
    },
    {
      key: "menu",
      label: 'Home'
    },
    {
      key: "private",
      label: 'private & Policy'
    },
   
    {
      key: "/",
      label: 'Login'
    }
  ];
  
  return (
    <Menu items={menuItems} onClick={(menuItem) => navigate(menuItem.key)}/>
  )
};

export default SideMenu;