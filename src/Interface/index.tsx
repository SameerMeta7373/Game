import {ReactNode} from 'react';

export interface primaryButtonI {
  onPress?: () => void;
  children?: ReactNode;
  min?: number;
  max?:number;
  exclude? : number;
}

// export interface startScreenI{
//     pickedNumber : number;
// }
