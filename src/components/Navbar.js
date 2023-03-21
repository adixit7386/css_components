import React,{useState} from "react";
import Styled from "styled-components";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PersonIcon from "@mui/icons-material/Person";
import { Mobile } from "../responsive";

// parent container for the navbar
const Container = Styled.div`
width:100vw;
border-bottom:1px solid #e0e0e0;
height:50px;
display:flex;
align-items:center;
justify-content:center;
`;

//wrapper for the left, right and center components
const Wrapper = Styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
margin:auto 20px;
${Mobile({ margin: "auto 8px" })};
`;

//left container contains the menu icon and the heading
const Left = Styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
`;
const MenuContainer = Styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
`;

const TitleContainer = Styled.div`
margin-left:10px;
display:flex;
align-items:center;
flex:5;`;

const Title = Styled.h1`
margin:0px;
cursor:pointer;
${Mobile({ fontSize: "24px" })};
`;

//it will contain the search container
const Center = Styled.div`
padding-left:10px;
padding-right:10px;
flex:1.5;
display:flex;
align-items:center;
justify-content:center;
`;

const InputContainer = Styled.div`
flex:9;
height:35px;
display:flex;
align-items:center;
jusify-content:center;
border:solid 1.5px;
border-top-left-radius:10px;
border-bottom-left-radius:10px;
padding:2px 20px;
border-right:none;
${Mobile({ padding: "2px 10px", width: "60px" })};
`;

const Input = Styled.input`
background-color:white;
color:grey;
font-size: 18px;
font-size: 18px;
flex: 1;
border:none;
height: 30px;
outline:none;
&:focus{
  font-size: 18px;
  font-size: 18px;
  flex: 1;
  border:none;
  background-color:white;
  color:black;
  height: 35px;
  outline:none;
}
${Mobile({ width: "90%" })};

`;

const SearchIconContainer = Styled.div`
height:35px;
width:35px;
border-left:none;
display:flex;
align-items:center;
jusify-content:center;
border:solid 1.5px;
border-top-right-radius:10px;
border-bottom-right-radius:10px;
padding:2px 4px;
`;

const Right = Styled.div`
flex:1;
`;
const AccountIconContainer = Styled.div`
display:flex;
align-items:center;
justify-content:flex-end;`;

const IconStyle = {
  height: "40px",
  width: "40px",
  cursor: "pointer",
};
const Navbar = () => {
  const [search,setSearch]=useState("");
  const handleSearch=()=>{
    console.log(search);
  }


  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuContainer>
            <MenuRoundedIcon style={IconStyle} />
          </MenuContainer>
          <TitleContainer>
            <Title>Navbar</Title>
          </TitleContainer>
        </Left>
        <Center>
          <InputContainer onKeyPress={(e) => e.code==="Enter"&&handleSearch()}>
            <Input onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search" />
          </InputContainer>
          <SearchIconContainer>
            <SearchRoundedIcon onClick={()=>handleSearch()} style={IconStyle} />
          </SearchIconContainer>
        </Center>
        <Right>
          <AccountIconContainer>
            <PersonIcon style={IconStyle} />
          </AccountIconContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
