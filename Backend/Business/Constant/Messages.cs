using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Constant
{
    public static class Messages
    {
        public static string choreAdded = "The chore was added";
        public static string notInWorkHours = "Chores cannot be viewed outside of work hours";
        public static string incompleteCriticalChores = "There are incomplete Critical chores";
        public static string duplicateName = "A chore with the same name exists";
        public static string choresListed = "Chores are listed";
        public static string updateSuccess = "Chore has been updated";
        public static string deleteSuccess = "Chore has been deleted";
    }
}
