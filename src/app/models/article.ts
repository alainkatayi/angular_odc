//definition d'une interface pour definir le type de chaque donnees, et la structure doit etre respecte, dans le cas contraire, il y'aura erreur

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
