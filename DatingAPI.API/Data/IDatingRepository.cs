using System.Collections.Generic;
using System.Threading.Tasks;
using DatingAPI.API.Models;

namespace DatingAPI.API.Data
{
    public interface IDatingRepository
    {
         void Add<T> (T entity) where T: class;
         void Delete<T> (T entity) where T: class;

          Task<IEnumerable<User>> GetUsers();

          Task<User> GetUser(int id);

          Task<bool> SaveAll();
    }
}