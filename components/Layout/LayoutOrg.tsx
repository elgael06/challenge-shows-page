import ContainerMol from "../ContainerMol/ContainerMol";
import FooterBarCom from "../FooterBarCom/FooterBarCom";
import NavbarComp from "../NavbarComp/NavbarComp";


const LayoutOrg = ({
    children=null
}) => {
    
    return (<div style={{ backgroundColor: '#00000020' }}>
        <NavbarComp />
        <ContainerMol >
            {children}
        </ContainerMol>
        <FooterBarCom />
    </div>);
}


export default LayoutOrg;