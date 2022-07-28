using Entities.Concrete;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete.EntityFramework
{
    public class ToDoListContext:DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //Insert the location of the Db (ip if not local)
            //If local change \mssqllocaldb to where your database is in
            optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=ToDoList;Trusted_Connection=true");

        }
        // Links Db tables with project classes
        public DbSet<Chore> Chores { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Chore>().ToTable("Chores");
            modelBuilder.Entity<Chore>().Property(p => p.Priority).HasConversion<int>();
            modelBuilder.Entity<Chore>().Property(p => p.IsDone).HasConversion<int>();

            base.OnModelCreating(modelBuilder);
        }
    }
}
