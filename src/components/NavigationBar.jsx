import React  from "react"
import styled from 'styled-components';

const Menu = styled.div `
    margin: 0 30px 0 0;
    margin-bottom: 20px;
`;

const HomeIcon = styled.button.attrs({
    className: "fa fa-home"
}) `
    border: none;
    background: #2F4F4F;
    width: 40px;
    height: 40px;
`;

const DropDownContent = styled.div `
    display: none;
    position: absolute;
    background-color: #EAEAEA;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;

    &:hover {
        display: block;
        color: red;
    }
`;

const MenuItem = styled.a `
    float: right;
    display: block;
    color: #FFFFFF;
    text-align: center;
    text-decoration: none;
    font-size: 24px;
    padding-right: 20px;

    &:visited {
        text-decoration: none;
    } 
    &:link {
        text-decoration: none;
    }
    &:hover {
        text-decoration: none;
        color: black;
        ${DropDownContent}{
            display: block;
         }
    }
    &:active {
        text-decoration: none;
    }
    
`;

const MenuItemHome = MenuItem.extend `
    float: left;
    margin-left: 15px;
`;

const LabelForResponsive = styled.label `
    margin: 0 40px 0 0;
    font-size: 26px;
    line-height: 70px;
    display: none;
    width: 28px;
    float: right;
`;

const InputCheckbox = styled.input `
    display: none;
`;

const Nav = styled.div `
    border-bottom: 1px solid #EAEAEA;
    text-align: right;
    height: 70px;
    width: 100%;
    line-height: 70px; 
    background: #2F4F4F;

    @media only screen and (max-width: 500px){
        ${LabelForResponsive}{
            display: block;
            cursor: pointer;
        }

        ${Menu}{
            text-align: center;
            width: 100%;
            display: none;
        }

        ${MenuItem}{
            display: block;
            border-bottom: 1px solid #EAEAEA;
            margin: 0;
        }

        ${MenuItemHome}{
            display: block;
            border-bottom: 1px solid #EAEAEA;
            margin: 0;
        }

        ${InputCheckbox}{
            &:checked + ${Menu}{
                display: block;
            }
        }
    }
`;


const DropDownItem = styled.a `
    background: #2F4F4F;
    float: none;
    color: white;
    text-decoration: none;
    display: block;
    text-align: center;
    font-size: 16px;
    
    &:visited {
        text-decoration: none;
    } 
    &:link {
        text-decoration: none;
    }
    &:hover {
        text-decoration: none;
        color: black;
        ${DropDownContent}{
            display: block;
         }
    }
    &:active {
        text-decoration: none;
    }a bejelentkezest nem oldottam meg 
`;


const DropBtn = styled.div `
    font-size: 24px;    
    outline: none;
    display: inherit;
`;

const DropDown = styled.div `
    display: inline;
    font-size: 16px;    
    background-color: inherit;
    font-family: inherit;
    margin: 0;
    float: none;
    overflow: hidden;

    &:hover{
         ${DropDownContent}{
            display: block;
         }
    }
`;

const Content = styled.div `
    overflow: hidden;
    background-color: inherit;
`;

const NavigationBar = (props) => {

    return (
        <div>
            <Nav>
                <InputCheckbox type="checkbox" id="inputcheck"/>
                <LabelForResponsive for="inputcheck"> &#9776; </LabelForResponsive>
                <Menu>
                    <MenuItemHome href="/"> 
                         <HomeIcon/> 
                         Dictionary
                    </MenuItemHome>
                    <Content>
                        <MenuItem href="/sign_in"> Sign In </MenuItem>
                        <MenuItem>
                            <DropDown>
                                <DropBtn> Expressions </DropBtn>
                                <DropDownContent>
                                    <DropDownItem href="/new_expression"> Add new  </DropDownItem>
                                    <DropDownItem href="/delete_expression"> Delete </DropDownItem>
                                    <DropDownItem href="/idk"> I don't know </DropDownItem>
                                </DropDownContent>
                            </DropDown>
                        </MenuItem>
                        <MenuItem href="/sign_up"> Sign Up </MenuItem>
                    </Content>
                </Menu>
            </Nav>
        </div>
    )
}

export default NavigationBar;