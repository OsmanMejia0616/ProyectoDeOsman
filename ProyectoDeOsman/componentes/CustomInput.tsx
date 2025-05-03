
type Props = {
    label: string;
    value: string;
    type? : 'text' |'password' |'email' |'numero' ;
    onChange: (text: string) =>void; 
    required: boolean;

}
//const onChange (Text) => {}


