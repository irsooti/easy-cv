import { ThemeProvider } from '@material-ui/styles';
import theme from './styles';
import './styles.css';

export const AppThemeProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
