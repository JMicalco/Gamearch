import { createGlobalStyle} from 'styled-components';

export const GeneralStyles = createGlobalStyle`
:root{
    --maxWidth:1280px;
    --white: #fff;
    --lightGrey: #757575;
    --medGrey:#BDBDBD;
    --DarkGrey: #F5F5F5;
    --fontHuge: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fonrSmall: 1rem;
}

body {
    margin: 0;
    padding: 0;
    h1 {
        font-size:2rem;
        font-weight:600;
        color:var(white);
    }
}
`