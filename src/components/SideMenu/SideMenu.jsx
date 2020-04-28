import React, { useContext } from 'react';

import {Link} from 'react-router-dom';
import './SideMenu.scss';

import {connect} from 'react-redux';
import {ToggleSideMenuDisplay} from '../../Redux/SideMenu/sideMenu.actions.js'
import ThemeTogglerIcon from '../ThemeTogglerIcon/ThemeTogglerIcon';

import {AloxIcon, CancelBtn, HomeIcon, SearchIcon, CollectionIcon, SavedItemsIcon, PaymentIcon, BillingInfo, OrderIcon, UserIcon, LanguageIcon, ThemeIcon, GearIcon, NotificationIcon, HelpIcon, ReportIcon} from '../SvgComponents/Svgs';
import { ThemeContext } from '../../contextProviders/ThemeProvider/ThemeProvider';

const SideMenu = ({display, ToggleSideMenuDisplay}) =>{

    const {currentTheme} = useContext(ThemeContext)

    const menuDisplay = display ? 'show' : 'hide';

    return(
        <div display = {menuDisplay} className = 'side-menu'>
            <div className = 'container'>
                <div className = 'side-menu-content shade1bg'>
                    <div className = ' section header'>
                        <div className = 'alox-icon'>
                            <AloxIcon/>
                        </div>
                        <button className = 'cancel-btn' onClick = {ToggleSideMenuDisplay}>
                            <CancelBtn/>
                        </button>
                    </div><hr/>


                    <div className = 'main-section'>
                        <div className = 'section section-1'>
                            <div className = 'option-set'>
                                <HomeIcon/>
                                <Link to = '/' onClick = {ToggleSideMenuDisplay}><h4>Home</h4></Link>
                            </div>
                            <div className = 'option-set'>
                                <SearchIcon/>
                                <input theme = {currentTheme} type = 'text' placeholder = 'Search'/>
                            </div>
                            <div className = 'option-set'>
                                <CollectionIcon/>
                                <Link to = '/collection' onClick = {ToggleSideMenuDisplay}><h4>Collection</h4></Link>
                            </div>
                            <div className = 'option-set'>
                                <SavedItemsIcon/>
                                <h4>Saved Items</h4>
                            </div>
                        </div>



                        <p className = 'section-title'>Account</p><hr/>
                        <div className = 'section section-2'>
                            {
                                true
                                ? <React.Fragment>
                                    <div className = 'option-set'>
                                        <PaymentIcon/>
                                        <h4>Payment method</h4>
                                    </div>
                                    <div className = 'option-set'>
                                        <BillingInfo/>
                                        <h4>Billing Information</h4>
                                    </div>
                                    <div className = 'option-set'>
                                        <OrderIcon/>
                                        <h4>Order and delivery</h4>
                                    </div>
                                </React.Fragment>
                                : <React.Fragment>
                                    <div className = 'option-set'>
                                        <UserIcon/>
                                        <Link to = '/login' onClick = {ToggleSideMenuDisplay}><h4>Log in / Sign up</h4></Link>
                                    </div>
                                </React.Fragment>
                            }
                        </div>

                        <p className = 'section-title'>Settings</p><hr/>
                        <div className = 'section section-3'>
                            <div className = 'option-set'>
                                <LanguageIcon/>
                                <div className = 'links-with-answers'>
                                    <h4>Language</h4>
                                    <p className = 'answer'>English</p>
                                </div>
                            </div>
                            <div className = 'option-set'>
                                <ThemeIcon/>
                                <div className = 'links-with-answers'>
                                    <h4>Dark mode</h4>
                                    <ThemeTogglerIcon/>
                                </div>
                            </div>
                            <div className = 'option-set'>
                                <GearIcon/>
                                <h4>Privacy settings</h4>
                            </div>
                            <div className = 'option-set'>
                                <NotificationIcon/>
                                <h4>Notifications</h4>
                            </div>
                            <div className = 'option-set'>
                                <HelpIcon/>
                                <h4>Help center</h4>
                            </div>
                            <div className = 'option-set'>
                                <ReportIcon/>
                                <h4>Report a problem</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchTopProps = (dispatch) =>{
    return{
        ToggleSideMenuDisplay: () => dispatch(ToggleSideMenuDisplay())
    }
}

const mapStateToProps = (state)=>{
    return{
        display: state.sideMenu.display
    }
}

export default connect(mapStateToProps, mapDispatchTopProps)(SideMenu);