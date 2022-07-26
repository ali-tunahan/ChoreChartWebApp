using Core.Utilities.Results;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface IChoreService
    {
        IDataResult<List<Chore>> GetAll();
        IDataResult<List<Chore>> GetByPriority(Priorities priority);
        IDataResult<List<Chore>> GetByStatus(ChoreStatuses status);
        IResult Add(Chore chore);
        IDataResult<Chore> GetById(int id);
        IResult Delete(Chore chore);
        IResult DeleteById(int id);
        IResult Update(Chore chore);



    }
}
