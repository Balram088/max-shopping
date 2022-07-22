import styled from 'styled-components';

export const Box = styled.div`

padding: 30px 10px;
background:#ffffff;
position: relative;
bottom: 0;
width: 100%;
margin-top:4%;


@media (max-width: 1000px) {
	padding: 50px 20px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 1 0px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(170px, 1fr));
grid-gap: 2px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: black;
margin-bottom: 5px;
font-size: 14px;
text-decoration: none;
&:hover {
	color: blue;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 14px;
color: black;
margin-bottom: 5px;
font-weight: bold;
`;

export const SocialRow =styled.div`
display: flex;
gap: 10px;
font-size:30px;
span{
    border:solid 1px gray;
    padding:20px;
    border-radius:50%;
}
`
