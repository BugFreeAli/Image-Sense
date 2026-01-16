export enum ViewState {
  LANDING = 'LANDING',
  DASHBOARD = 'DASHBOARD'
}

export interface TerminalLog {
  id: string;
  timestamp: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  highlight?: boolean;
}
