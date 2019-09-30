using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class AddAppUserToStock : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AppUserId",
                table: "Stocks",
                nullable: false);

            migrationBuilder.AddColumn<double>(
                name: "CashAmount",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.CreateIndex(
                name: "IX_Stocks_AppUserId",
                table: "Stocks",
                column: "AppUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Stocks_AspNetUsers_AppUserId",
                table: "Stocks",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Stocks_AspNetUsers_AppUserId",
                table: "Stocks");

            migrationBuilder.DropIndex(
                name: "IX_Stocks_AppUserId",
                table: "Stocks");

            migrationBuilder.DropColumn(
                name: "AppUserId",
                table: "Stocks");

            migrationBuilder.DropColumn(
                name: "CashAmount",
                table: "AspNetUsers");
        }
    }
}
