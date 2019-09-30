using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Stocks",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Symbol = table.Column<string>(nullable: true),
                    CompanyName = table.Column<string>(nullable: true),
                    Exchange = table.Column<string>(nullable: true),
                    PurchaseDate = table.Column<DateTime>(nullable: false),
                    Price = table.Column<double>(nullable: false),
                    YearHigh = table.Column<double>(nullable: false),
                    Amount = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stocks", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Stocks");
        }
    }
}
