using Business.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChoresController : ControllerBase
    {
        //Loosely coupled
        IChoreService _choreService;

        public ChoresController(IChoreService choreService)
        {
            this._choreService = choreService;
        }

        [HttpPost("add")]
        public IActionResult Post(Chore chore)
        {
            var result = _choreService.Add(chore);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpGet("getall")]
        public IActionResult GetAll()
        {
            var result = _choreService.GetAll();
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpGet("getbyid")]
        public IActionResult GetByID(int id)
        {
            var result = _choreService.GetById(id);
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpGet("getbypriority")]
        public IActionResult GetByPriority(Priorities priority)
        {
            var result = _choreService.GetByPriority(priority);
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpGet("getbystatus")]
        public IActionResult GetByStatus(ChoreStatuses status)
        {
            var result = _choreService.GetByStatus(status);
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpPut("update")]
        public IActionResult Update(Chore chore)
        {
            var result = _choreService.Update(chore);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }


        [HttpDelete("delete")]
        public IActionResult Delete(Chore chore)
        {
            var result = _choreService.Delete(chore);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpDelete("deletebyid")]
        public IActionResult DeleteById(int id)
        {
            var result = _choreService.DeleteById(id);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }

}

