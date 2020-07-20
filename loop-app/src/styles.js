import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        marginTop: theme.spacing(3)
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        minWidth: 300,
        minHeight: 400,
    },

    titlePaperRight: {
        marginRight: theme.spacing(0),
        marginBottom: theme.spacing(2),
        textAlign: 'center',
        verticalAlign: 'middle',
        backgroundColor: '#2e323c',
        borderRadius: 10,
        fontSize: 18,
        color: 'white',
        lineHeight: "30px"
    },

    monthInformation: {
        color: '#2e323c',
        fontSize: 16,
        lineHeight: "60px",
        marginBottom: theme.spacing(3)
    },

    bar: {
        alignItens: 'center'
    },

    customButtonWeek: {
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(6),
        borderRadius: '100%',
        lineHeight: '50px',
        backgroundColor: 'white' 
    },

    customButtonTime: {
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(6),
        borderRadius: '15%',
        lineHeight: '20px',
        backgroundColor: 'white'
    },

    customButtonSchedule: {
        backgroundColor: '#ff123c',
        color: 'white'
    },

    customButtonConfirm: {
        marginTop: theme.spacing(2),
        backgroundColor: '#ff123c',
        color: 'white'
    },

    leftBoxyTypo : {
        fontWeight: 'bold'
    },

    backButton: {
        marginTop: theme.spacing(0),
        lineHeight: '5px',
        marginBot: theme.spacing (2)
    },

}));


export default useStyles;