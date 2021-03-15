import { Card } from "react-bootstrap";


const CardShowTitleMol = ({
    title = '',
    subtitle = '',    
}) => <>
    <Card.Title>{ `${title.slice(0, 20)} ${title.length > 20 ? '...': ''}` || 'name'}</Card.Title>
    <Card.Text className="mb-2 text-muted">
            <b style={{ color: '#00000095' }}>
                {`${subtitle.slice(0, 13)} 
                    ${subtitle.length > 13
                        ? '...'
                        : ''}`
                    || 'original_name'}
            </b>
    </Card.Text>
            
</>

export default CardShowTitleMol;