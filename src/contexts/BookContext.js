import React, { Component } from 'react';

export const BookContext =  React.createContext();

export class BookContextProvider extends Component {

  state = {
    books:
    [
    
      {
        title : "Cinayət və cəza",
        author : "Fyodor  Dostoyevski",
        pageNum : 600,
        imageURL : "https://altunkitab.az/storage/439/conversions/cinayet_ve_ceza-blade.jpg",
        topic : "Cinayət və cəza romanı rus milli, mədəni, ictimai tarixinin mürəkkəb dövrlərindən birini əks etdirir. Bu elə bir dövr idi ki, Rusiya təhkimçilik hüququndan təzəcə azad olmuş və hələ özünün gələcək inkişaf yollarını dəqiq müəyyənləşdirməmişdi."
      },
    
      {
        title : "Yetmiş Yedinci Gün",
        author : "Varis Yolcuyev",
        pageNum : 500,
        imageURL : "https://cdn1.dokuzsoft.com/u/siyasalkitap/img/b/y/e/yetmis-yedinci-gun89daf7c457995cb5f01bd91ee42f781c.jpg",
        topic : "Bu günə qədər “azərbaycan ədəbiyyatında” mühum yer tutan Varis Yolcuyevin “Yetmiş Yedinci Gün” romanı yetərincə maraqlı və son dərəcə həyati əsərdir.Qısa müddətdə oxucular tərəfindən ən çox oxunulan əsərlərdən birinə çevrildi."
      },
    
      {
        title : "Xəyanət",
        author : " Elxan Elatlı",
        pageNum : 450,
        imageURL : "https://static-sl.insales.ru/images/products/1/5366/171070710/large_379e4a79a208baf22512e68ee88f5dce.jpg",
        topic : "Bu kitab Azərbaycan milli detektivinin əsas ya­ra­dıcılarından hesab olunan Elxan Elatlının geniş oxucu kütləsi qazanmasında əhəmiyyətli rol oyna­mışdır. Romanda yüksək vəzifə sahibi olan birinin başına gələn ağlasığmaz faciədən bəhs olunur."
      },
    
      {
        title : "Anna Karenina",
        author : "Lev Tolstoy",
        pageNum : 368,
        imageURL : "https://static-sl.insales.ru/images/products/1/4015/171069359/large_501b70e3bf3ea78dce48ee55ee2127e0.jpg",
        topic : "Çox mübahisələrə səbəb olmuş məşhur roman olmuşdur. Müəllif bir evin, bir ailə­nin problemindən başlayır və bütün Rusiyanın üzləşdiyi çətinliklərə toxu­nur.Ekzüperinin azsaylı əsərləri təyyarəçi Ekzüperinin təcrübəsi hiss-həyəcanı hesabına yaranıb."
      },
    
      {
        title : "Kiçik prins",
        author : "Antuan de Sent-Ekzüperi",
        pageNum : 852,
        imageURL : "https://static-sl.insales.ru/images/products/1/6505/171071849/large_8e330e8d93ac092df1ce1d09f1c3272f.jpg",
        topic : "Antuan de Sent-Ekzüperi öz qısa ömründə iki həyat yaşayıb: təyyarəçi həyatı, bir də yazıçı ömrü. Əslində onun həyatının bu iki tərəfini bir-birindən ayırmaq da olmaz, çünki yazıçı Ekzüperinin azsaylı əsərləri təyyarəçi Ekzüperinin təcrübəsi, hiss-həyəcanı hesabına yaranıb."
      },
    
      {
        title : "Qəzəb salxımları",
        author : "Con Steynbek",
        pageNum : 730,
        imageURL : "https://static-sl.insales.ru/images/products/1/4203/171069547/large_20cf7e7d9917bfc4f338a5822299a308.png",
        topic : "XX əsr Azərbaycan ədəbiyyatında geniş şöhrət tapan və adı tezliklə dünyanın bir çox ölkələrinə yayılan Con Steynbekin “Qəzəb salxımları” romanı ilk dəfə 1939-cu ildə çap olunub və “Bədii kitab” nominasiyası üzrə Pulitser mükafatına layiq görülüb."
      }
    
    ]

  }

  render() {

    return (

      <div>
        <BookContext.Provider value={this.state}>
          {this.props.children}
        </BookContext.Provider>
      </div>
    )
  }
}

export default BookContextProvider;





