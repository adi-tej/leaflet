import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './Home.css';
import {Icon, Menu, Segment, Sidebar} from "semantic-ui-react";

const Home = () => {
    const history = useHistory()

    const [activeItem, setActiveItem] = useState('home')

    const handleItemClick = (e, {name}) => {
        setActiveItem(name)
    }
    return (
        <Sidebar.Pushable as={Segment}>
            <Sidebar
                className='sidemenu'
                animation='overlay'
                as={Menu}
                secondary
                vertical
                visible
                width='thin'
            >
                <img src='logo.png' alt='Logo' style={{width: 50, height: 50}}/>
                <Menu.Item
                    name='menu'
                    active={activeItem === 'menu'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='dashboard'
                    active={activeItem === 'dashboard'}
                    onClick={handleItemClick}
                />
                <br/>
                <Icon inverted name='instagram'/>
                <Icon inverted name='twitter'/>
                <Icon inverted name='facebook f'/>
            </Sidebar>

            <Sidebar.Pusher>

                <div className='homeContainer'>
                    <img src='home.png' alt='Home' style={{width: 500}}/>
                    <img className='startImage' src='start.png' alt='Start'/>
                    <img className='startImage startHover' src='start-hover.png' alt='Start'
                         onClick={() => history.push('/login')}/>
                </div>

            </Sidebar.Pusher>
        </Sidebar.Pushable>
    )
}
export default Home;
