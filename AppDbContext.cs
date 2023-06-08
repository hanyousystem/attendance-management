using Microsoft.EntityFrameworkCore;
using AngularSample.Models;

namespace AngularSample
{
    public class AppDbContext : DbContext
    {
         // コンストラクター
        public AppDbContext()
        {
        }

        // コンストラクター
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }
        public static string ConfigPath { get; set; }= null!;
        public DbSet<UserInfo> UserInfo { get; set; }
        public DbSet<UserInfo02> UserInfo02 { get; set; }
        public DbSet<UserInfo03> UserInfo03 { get; set; }
        public DbSet<UserInfo04> UserInfo04 { get; set; }
        public DbSet<UserInfo05> UserInfo05 { get; set; }
        public DbSet<UserInfoShidou> UserInfoShidou { get; set; }
        // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        // {
        //     // データベース接続文字列の設定
        //     optionsBuilder.UseSqlite(ConfigPath);
        //      optionsBuilder.UseSqlServer(ConfigPath);
        // }
    }

}
