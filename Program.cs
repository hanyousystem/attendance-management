using Microsoft.EntityFrameworkCore;


namespace AngularSample
{
    public class Program
    {
        public static void Main(string[] args)
        {

            var builder = WebApplication.CreateBuilder(args);
        
            builder.Services.AddControllers();
            builder.Services.AddDbContext<AppDbContext>(options => {
            // var path = builder.Configuration.GetConnectionString("MyWorldDbConnection");
            // options.UseSqlite(path);
            var path = builder.Configuration.GetConnectionString("SQLConnection");
            options.UseSqlServer(path);
            AppDbContext.ConfigPath =path;
            });
            builder.Services.AddLogging(options => options.AddConsole());
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
           
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            builder.Services.AddLogging();
            app.ConfigureExceptionHandler(app.Logger);
            app.UseStaticFiles();
            app.UseRouting();

            // CORS
            app.UseCors(x=>x.AllowAnyMethod()
            .AllowAnyHeader()
            .AllowAnyOrigin());
            app.UseEndpoints(x => x.MapControllers());

            app.Run();
        }
    }
}