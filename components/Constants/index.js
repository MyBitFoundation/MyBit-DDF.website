
const blue = '#1890ff';
const blueHover = '#40a9ff';
const blueActive = '#096dd9';
const green = '#00F281';
const greenHover = '#55EAA5';
const greenActive = '#00C368';

const Constants = {
  colors: {
    backgroundGradientHorizontal: 'linear-gradient(62deg, #001358, #125ac4);',
    backgroundGradientVertical: 'linear-gradient(to top, #001358, #125ac4);',
  },
  tags:{
    checkedState: {
      color: "#ffffff",
      backgroundColor: blue,
    },
    uncheckedState: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      color: "rgba(0, 0, 0, 0.65)",
    },
    hoverState: {
      color: blue,
    }
  },
  buttons:{
    primary:{
      green: {
        color: 'white',
        colorHover: 'white',
        colorActive: '',
        backgroundColor: green,
        backgroundColorHover: greenHover,
        backgroundColorActive: greenActive,
        borderColor: green,
        borderColorHover: greenHover,
        borderColorActive: greenActive,
      },
      blue: {
        color: 'white',
        colorHover: 'white',
        colorActive: 'white',
        backgroundColor: blue,
        backgroundColorHover: blueHover,
        backgroundColorActive: blueActive,
        borderColor: blue,
        borderColorHover: blueHover,
        borderColorActive: blueActive,
      }
    },
    secondary: {
      default: {
        color: 'white',
        colorHover: blueHover,
        colorActive: blueActive,
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        backgroundColorActive: 'transparent',
        borderColor: 'white',
        borderColorHover: blueHover,
        borderColorActive: blueActive,
      },
      back: {
        color: 'rgba(0, 0, 0, 0.65)',
        colorHover: blueHover,
        colorActive: blueActive,
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        backgroundColorActive: '#ffffff',
        borderColor: '#d9d9d9',
        borderColorHover: blueHover,
        borderColorActive: blueActive,
      }
    }
  },
  paragraphs:{
    homePage:{
      fontSize: '20px',
      textAlign: 'center',
    }
  },
}

export default Constants;
