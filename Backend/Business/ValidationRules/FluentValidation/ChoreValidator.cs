using Entities.Concrete;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.ValidationRules.FluentValidation
{
    public class ChoreValidator : AbstractValidator<Chore>
    {
        public ChoreValidator()
        {
            RuleFor(p => p.Id).NotNull();//Id cannot be null since it is used as a primary key
            RuleFor(p => p.Name).MinimumLength(2);
            RuleFor(p => p.IsDone).IsInEnum();
            RuleFor(p => p.Priority).IsInEnum();
        }

    }
}
