export default interface FormsInterface {
  token: string;
  type: string;
  props: Props;
  state: boolean | null;
}

interface Props {
  title: string;
  required?: boolean;
  placeholder?: string;
  default?: boolean;
}
