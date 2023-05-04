import { blueGrey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";


export default makeStyles(()=>({
    appBar: {
        borderRadius: 5,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
      },
      image: {
        marginLeft: '15px',
      },

      button: {
        justifyContent: 'center',
        alignItems : 'center',
      },

      home_heading :{
        justifyContent: 'center',
        marginTop : 150,
        fontFamily:'Cabin Sketch',
        fontWeight : 500,
      }

      
}));