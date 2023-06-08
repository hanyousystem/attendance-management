using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

// ユーザー情報を保持するテーブルを作成。  
namespace AngularSample.Models
{
    [Table("users")]
    public class UserInfo
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("Name")]
        public string Name { get; set; }
        [Column("PhoneNumber")]
        public string PhoneNumber { get; set; }

        [Column("Comment")]
        public string Comment { get; set; }
        [Column("canRespond")]
        public bool canRespond { get; set; }
    }

    //テストデータの拡張
    [Table("users02")]
    public class UserInfo02
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("Name")]
        public string Name { get; set; }
        [Column("PhoneNumber")]
        public string PhoneNumber { get; set; }

        [Column("Comment")]
        public string Comment { get; set; }
        [Column("canRespond")]
        public bool canRespond { get; set; }
    }

    //テストデータの拡張
    [Table("users03")]
    public class UserInfo03
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("Name")]
        public string Name { get; set; }
        [Column("PhoneNumber")]
        public string PhoneNumber { get; set; }
        [Column("Comment")]
        public string Comment { get; set; }
        [Column("canRespond")]
        public bool canRespond { get; set; }
    }

    //テストデータの拡張
    [Table("users04")]
    public class UserInfo04
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("Name")]
        public string Name { get; set; }
        [Column("PhoneNumber")]
        public string PhoneNumber { get; set; }
        [Column("Comment")]
        public string Comment { get; set; }
        [Column("canRespond")]
        public bool canRespond { get; set; }
    }

    //テストデータの拡張
    [Table("users05")]
    public class UserInfo05
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("Name")]
        public string Name { get; set; }
        [Column("PhoneNumber")]
        public string PhoneNumber { get; set; }

        [Column("Comment")]
        public string Comment { get; set; }
        [Column("canRespond")]
        public bool canRespond { get; set; }
    }

    //テストデータの拡張
    [Table("UserShidoukan")]
    public class UserInfoShidou
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("Name")]
        public string Name { get; set; }
        [Column("PhoneNumber")]
        public string PhoneNumber { get; set; }

        [Column("Comment")]
        public string Comment { get; set; }
        [Column("canRespond")]
        public bool canRespond { get; set; }
    }
}
