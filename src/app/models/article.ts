export interface Article {
    id: number;
    title : String;
    content : String;
    auteur:String;
    photo:String;
    created_at:Date;
    nb_comment:Number;
    categorie:String[];
}
