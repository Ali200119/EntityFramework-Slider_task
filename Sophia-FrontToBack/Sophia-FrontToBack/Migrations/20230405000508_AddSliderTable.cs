using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Sophia_FrontToBack.Migrations
{
    public partial class AddSliderTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Sliders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sliders", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Sliders",
                columns: new[] { "Id", "Description", "Image", "Title" },
                values: new object[,]
                {
                    { 1, "Up to 70%", "Slide1.jpg", "HUGE SALE" },
                    { 2, "Check the promotion", "Slide2.jpg", "BIGGEST DISCOUNT" },
                    { 3, "Dont miss it", "Slide3.jpg", "BIGGEST SALE" },
                    { 4, "Special selection", "Slide4.jpg", "OUR BEST PRODUCTS" },
                    { 5, "Only for today", "Slide5.jpg", "MASSIVE SALE" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Sliders");
        }
    }
}
