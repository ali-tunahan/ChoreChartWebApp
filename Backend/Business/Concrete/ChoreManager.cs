using Business.Abstract;
using Business.Constant;
using Business.ValidationRules.FluentValidation;
using Core.Aspects.Autofac.Validation;
using Core.Utilities.Business;
using Core.Utilities.Results;
using DataAccess.Abstract;
using DataAccess.Concrete;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class ChoreManager : IChoreService
    {
        IChoreDal _choreDal;

        public ChoreManager(IChoreDal choreDal)
        {
            _choreDal = choreDal;
        }

        [ValidationAspect(typeof(ChoreValidator))]
        public IResult Add(Chore chore)
        {
            IResult result = BusinessRules.Run(CheckIfAllCriticalChoresComplete(chore.Priority),
    CheckIfDuplicateName(chore.Name),CheckIfWorkHours());

            if (result != null)
            {
                return result;
            }

            _choreDal.Add(chore);
            return new SuccessResult(Messages.choreAdded);
        }

        public IDataResult<List<Chore>> GetAll()
        {
            IResult result = BusinessRules.Run(CheckIfWorkHours());
            if (result != null)
            {
                return new ErrorDataResult<List<Chore>>(Messages.notInWorkHours);
            }

            return new SuccessDataResult<List<Chore>>(_choreDal.GetAll(), Messages.choresListed);
        }

        public IDataResult<Chore> GetById(int id)
        {
            IResult result = BusinessRules.Run(CheckIfWorkHours());
            if (result != null)
            {
                return new ErrorDataResult<Chore>(Messages.notInWorkHours);
            }

            return new SuccessDataResult<Chore>(_choreDal.Get(p => p.Id == id), Messages.choresListed);
        }

        public IDataResult<List<Chore>> GetByPriority(Priorities priority)
        {
            IResult result = BusinessRules.Run(CheckIfWorkHours());
            if (result != null)
            {
                return new ErrorDataResult<List<Chore>>(Messages.notInWorkHours);
            }

            return new SuccessDataResult<List<Chore>>(_choreDal.GetAll(p => p.Priority == priority), Messages.choresListed);
        }

        public IDataResult<List<Chore>> GetByStatus(ChoreStatuses status)
        {
            IResult result = BusinessRules.Run(CheckIfWorkHours());
            if (result != null)
            {
                return new ErrorDataResult<List<Chore>>(Messages.notInWorkHours);
            }

            return new SuccessDataResult<List<Chore>>(_choreDal.GetAll(p => p.IsDone == status), Messages.choresListed);
        }
        [ValidationAspect(typeof(ChoreValidator))]
        public IResult Update(Chore chore)
        {
            _choreDal.Update(chore);
            return new SuccessResult(Messages.updateSuccess);
        }

        public IResult Delete(Chore chore)
        {
            _choreDal.Delete(chore);
            return new SuccessResult(Messages.deleteSuccess);
        }

        //Business Rules
        //Checks if another chore with the same name exists
        private IResult CheckIfDuplicateName(string choreName)
        {
            var result = _choreDal.GetAll(p => p.Name == choreName).Any();
            if (result)
            {
                return new ErrorResult(Messages.duplicateName);
            }
            return new SuccessResult();
        }

        //Checks if another Incomplete critical chore exists
        //Always allows if the current chore is critical
        private IResult CheckIfAllCriticalChoresComplete(Priorities priority)
        {
            if(priority == Priorities.Critical)
            {
                return new SuccessResult();
            }
            var result = _choreDal.GetAll(p => p.Priority == Priorities.Critical && p.IsDone == ChoreStatuses.Incomplete).Any();
            if (result)
            {
                return new ErrorResult(Messages.incompleteCriticalChores);
            }
            return new SuccessResult();
        }
        
        //Chores can only be get during work hours
        private IResult CheckIfWorkHours()
        {
            if(DateTime.Now.Hour > 8 && DateTime.Now.Hour < 17)
            {
                return new SuccessResult();
            }
            return new ErrorResult(Messages.notInWorkHours);
        }

        public IResult DeleteById(int id)
        {
            Chore chore = new Chore{ Id = id };
            _choreDal.Delete(chore);
            return new SuccessResult(Messages.deleteSuccess);
        }
    }
}
