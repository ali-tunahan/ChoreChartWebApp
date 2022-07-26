using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Entities.Concrete
{
    public enum Priorities
    {
        Low,
        Medium,
        High,
        Critical
    }

    public enum ChoreStatuses
    {
        Incomplete,
        Completed
    }

    public class Chore : IEntity
    {

        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public Priorities Priority { get; set; }
        public ChoreStatuses? IsDone { get; set; }
        public DateTime? DateToDo { get; set; }
        public static string Serialize(object obj)
        {
            return JsonSerializer.Serialize(obj);
        }
    }
}
